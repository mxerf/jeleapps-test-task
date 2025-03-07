import { useClickAway } from "@/hooks/useClickAway";
import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

interface ColorPickerButtonProps {
  text?: string;
  value: string;
  setValue: (color: string) => void;
}

export const ColorPickerButton: React.FC<ColorPickerButtonProps> = ({
  text = "Color Picker",
  value,
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(value ?? "#ffffff");
  console.log(value);
  const pickerRef = useRef<HTMLDivElement>(null);

  useClickAway(pickerRef, () => setIsOpen(false));

  useEffect(() => {
    if (setValue) {
      setValue(color);
    }
  }, [color]);

  return (
    <div ref={pickerRef} className="relative inline-block">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className="w-6 h-6 rounded-lg"
          style={{ backgroundColor: color }}
        />
        <span className="text-foreground">{text}</span>
      </button>
      {isOpen && (
        <div className="z-10 absolute left-0 mt-2 p-2 bg-card rounded-lg">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
    </div>
  );
};
