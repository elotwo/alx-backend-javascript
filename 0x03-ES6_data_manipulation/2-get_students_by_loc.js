function getStudentsByLocation (objs, place) {
  return objs.filter(obj => obj.location === place);
}
export default  getStudentsByLocation;
