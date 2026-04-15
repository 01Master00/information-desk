import { createPortal } from "react-dom";

type TooltipProps = {
  visible: boolean;
  content: string;
  top: number;
  left: number;
};

function Tooltip({ visible, content, top, left }: TooltipProps) {
  if (!visible) {
    return null;
  }

  return createPortal(
    <div
      className="pointer-events-none fixed z-[99999] -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-lg"
      role="tooltip"
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      {content}
    </div>,
    document.body,
  );
}

export default Tooltip;
