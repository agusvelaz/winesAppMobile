import * as FileSystem from "expo-file-system";
export const ADD_WINE = "ADD_WINE";

export const addWine = (title, image, detail) => {
  return async (dispatch) => {
    const filename = image.split("/").pop();
    const Path = FileSystem.documentDirectory + filename;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      dispatch({
        type: ADD_WINE,
        payload: {
          title,
          image: Path,
          detail
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
