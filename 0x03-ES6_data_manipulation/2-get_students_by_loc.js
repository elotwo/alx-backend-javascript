export default function getStudentsByLocation (objs, place) {
  return objs.filter(obj => obj.location === place);
}
