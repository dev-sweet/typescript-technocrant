{
  // problem 4
  // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a
  // function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  const calculateShapeArea = (Obj: Circle | Rectangle): number => {
    if ("radius" in Obj) {
      const circle = Math.PI * Obj.radius * Obj.radius;
      return circle;
    }

    return Obj.height * Obj.width;
  };

  const result: number = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(result);
}
