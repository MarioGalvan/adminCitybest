import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

export const UseUploadImage = async (file) => new Promise((resolve, reject) => {
    const storage = getStorage();
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;

                default:
            }
        },
        (error) => {
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL)
            });
        }
    );

})

export const useRemoveImage = (file, callback) => {
    const storage = getStorage();
    const imageref = ref(storage, file[ 0 ].name);
    deleteObject(imageref).then(() => {
        // File deleted successfully
        callback(true)
    }).catch((error) => {
        callback(false)
        // Uh-oh, an error occurred!
    });
}