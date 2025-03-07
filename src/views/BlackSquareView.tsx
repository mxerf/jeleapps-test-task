"use client";
import { ColorPickerButton } from "@/components/ColorPicker";
import GradientText from "@/components/GradientText";
import { useState } from "react";

const BlackSquareView = () => {
  const [colors, setColors] = useState(["#72D73C", "#2faada", "#72D73C"]);

  const onColorChange = (color: string, index: number) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  return (
    <div className="grid gap-4 max-[400px]:gap-2">
      <GradientText
        colors={colors}
        showBorder
        className="block size-96 max-[400px]:size-72 text-xl max-[400px]:text-base font-bold font-mono"
      >
        I&apos;m a big black square!
      </GradientText>
      <div className="flex max-[400px]:flex-col max-[400px]:gap-2 items-center justify-between">
        {colors.map((_, index) => (
          <ColorPickerButton
            key={index}
            text={`Color ${index + 1}`}
            value={colors[index]}
            setValue={(color) => onColorChange(color, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlackSquareView;
