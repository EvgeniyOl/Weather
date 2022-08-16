function getPosition() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}
const location = async () => {
  try {
    const loc: any = await getPosition();
    let latitude = loc.coords.latitude;
    let longitude = loc.coords.longitude;
    return `lat=${latitude}&lon=${longitude}`;
  } catch (err) {
    console.log(err);
  }
};

export default location;
