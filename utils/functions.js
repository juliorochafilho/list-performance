export default function stringPathToObject(obj, path, value) {
  var schema = obj;
  const paths = path.split(".");

  if (paths.length === 1) {
    schema[paths[0]] = value;
  } else {
    schema[paths[0]] = stringPathToObject(
      schema[paths[0]],
      paths.filter((item) => item !== paths[0]).join("."),
      value
    );
  }

  return schema;
}


