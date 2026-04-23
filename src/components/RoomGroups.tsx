import Room from "./Room";
import { useState } from "react";
import { floorGroups, isBaseRoomLabel, isCorridorLabel } from "./roomData";

type RoomGroupProps = {
  getOpacity: (
    label: string,
    selfCategory: string,
    baseOpacity?: number,
  ) => number;
  onHoverStart: (label: string, x: number, y: number) => void;
  onHoverMove: (x: number, y: number) => void;
  onHoverEnd: () => void;
};

function RoomGroups({
  getOpacity,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: RoomGroupProps) {
  const [filter, setFilter] = useState<number | null>(null);

  return (
    <group position={[0, 0, 0]} rotation={[-1.2, 0, 0.2]}>
      {floorGroups
        .filter((e) => (filter != null ? e.floor == filter : e))
        .map((floor, floorIndex) => (
          <group
            key={floorIndex}
            position={filter != null ? [0, 1, 0] : floor.position}
            scale={floor.scale}
            onClick={() =>
              filter == null ? setFilter(floor.floor) : setFilter(null)
            }
          >
            {floor.rooms.map((room) => {
              const isBaseRoom = isBaseRoomLabel(room.label);
              const isCorridor = isCorridorLabel(room.label);
              const displaySize: [number, number, number] =
                isBaseRoom || isCorridor
                  ? room.size
                  : [
                      Math.max(room.size[0] - 0.2, 0.6),
                      Math.max(room.size[1] - 0.2, 0.6),
                      room.size[2],
                    ];

              const opacity = room.category
                ? getOpacity(room.label, room.category, room.opacity ?? 1)
                : (room.opacity ?? 1);

              return (
                <Room
                  key={`${room.label}-${room.position.join("-")}`}
                  position={room.position}
                  size={displaySize}
                  color={room.color}
                  opacity={opacity}
                  label={room.label}
                  onHoverStart={
                    isBaseRoom || isCorridor ? undefined : onHoverStart
                  }
                  onHoverMove={
                    isBaseRoom || isCorridor ? undefined : onHoverMove
                  }
                  onHoverEnd={isBaseRoom || isCorridor ? undefined : onHoverEnd}
                />
              );
            })}
          </group>
        ))}
    </group>
  );
}

export default RoomGroups;
