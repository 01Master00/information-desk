import type { ThreeElements, ThreeEvent } from "@react-three/fiber";

type RoomProps = ThreeElements["mesh"] & {
  size?: [number, number, number];
  color?: string;
  opacity?: number;
  label?: string;
  onHoverStart?: (label: string, x: number, y: number) => void;
  onHoverMove?: (x: number, y: number) => void;
  onHoverEnd?: () => void;
};

function Room({
  size = [2, 2, 0.2],
  color = "rgb(245, 158, 11)",
  opacity = 1,
  label = "Terem",
  onHoverStart,
  onHoverMove,
  onHoverEnd,
  ...props
}: RoomProps) {
  const materialOpacity = Math.max(0, Math.min(1, opacity));

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    onHoverStart?.(label, event.nativeEvent.clientX, event.nativeEvent.clientY);
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    onHoverMove?.(event.nativeEvent.clientX, event.nativeEvent.clientY);
  };

  return (
    <mesh
      {...props}
      onPointerOver={handlePointerOver}
      onPointerMove={handlePointerMove}
      onPointerOut={onHoverEnd}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        opacity={materialOpacity}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
}

export default Room;
