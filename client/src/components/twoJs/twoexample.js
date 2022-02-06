import { useEffect, useRef } from "react";
import Two from "two.js";
import "./twoexample.css";

function TwoDemo() {
  let domElement = useRef();

  useEffect(setup, []);

  function setup() {
    let two = new Two({
      fitted: true,
      autostart: true,
    }).appendTo(domElement.current);

    let rect = two.makeRectangle(two.width / 2, two.height / 2, 50, 50);
    two.bind("update", update);

    return unmount;

    function unmount() {
      
      two.unbind("update");
      two.pause();
      domElement.current.removeChild(two.renderer.domElement);
    }

    function update() {
      rect.rotation += 0.001;
      rect.position.y += 0.1;
      
    }
  }

  return (
    <div id="domElement">
      <div ref={domElement} />
    </div>
  );
}

export default TwoDemo;
