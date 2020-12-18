export const formatBytes = (bytes) => {
    if (bytes === 0) return "0";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    const dm = i < 4 ? 0 : 1;

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export const validateInput = input => {
    let errorMassage;

    if(input.trim() === ""){
        errorMassage = "You must enter a name of a customer...";
    }

    // other checks here

    return errorMassage;
}

export const randomInt = (min,range) => {
    return Math.floor((Math.random()*(range+1))+min)
}

export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }