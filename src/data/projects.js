function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}

const project1 = importAll(
  require.context("./projects/project1", false, /\.jpeg/)
);

export const projects = [
  {
    id: "1",
    type: "object / product design",
    title: "brush and massager (2 in 1)",
    _3d_img: project1["project_3d.jpeg"].default,
    _sketch1: project1["project_sketch_1.jpeg"].default,
    _sketch2: project1["project_sketch_2.jpeg"].default,
  },
];
