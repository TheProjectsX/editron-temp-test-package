export const uploadToImgbb = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const res = await fetch(
            `https://api.imgbb.com/1/upload?key=${
                import.meta.env.VITE_IMGBB_APIKEY
            }`,
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await res.json();
        return data.data.display_url;
    } catch (err) {
        console.error(err);
        return null;
    }
};
