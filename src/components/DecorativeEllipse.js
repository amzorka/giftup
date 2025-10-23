import ellipse from "../images/Ellipse.svg";

export default function DecorativeEllipse({
  size = 352,
  top,
  right,
  bottom,
  left,
  className = "",
  style = {},
}) {
  let base = {};
  let tx = 0;

  if (typeof left === "number") {
    base.left = 0;
    tx = left;
  }
  if (typeof right === "number") {
    base.right = 0;
    tx = -right;
  } // сдвиг влево

  if (typeof top === "number") base.top = top;
  if (typeof bottom === "number") base.bottom = bottom;

  return (
    <img
      src={ellipse}
      alt=""
      aria-hidden="true"
      className={`deco-ell ${className}`}
      style={{
        position: "absolute",
        width: size,
        height: size,
        transform: `translateX(${tx}px)`,
        pointerEvents: "none",
        userSelect: "none",
        maxWidth: "none", // не подгоняется под контейнер
        overflow: "clip", // новое свойство, аналог hidden
        clipPath: "inset(0 round 0)", // принудительно «обрезает» box
        ...base,
        ...style,
      }}
    />
  );
}
