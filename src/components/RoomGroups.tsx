import Room from "./Room";

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

type RoomDefinition = {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  label: string;
  category?: string;
  opacity?: number;
};

type FloorGroupDefinition = {
  position: [number, number, number];
  scale: number;
  rooms: RoomDefinition[];
};

const aFloorRooms: RoomDefinition[] = [
  {
    position: [0, 0, -0.2],
    size: [18, 12, 0.12],
    color: "rgb(248, 250, 252)",
    opacity: 0.2,
    label: "A emelet - Alap",
  },
  {
    position: [-5.3, 2.8, 0],
    size: [4.3, 2.8, 0.22],
    color: "rgb(157, 200, 245)",
    label: "A101 Informatika",
    category: "Informatika",
  },
  {
    position: [-0.4, 2.8, 0],
    size: [5.2, 2.8, 0.22],
    color: "rgb(159, 221, 227)",
    label: "A102 Informatika",
    category: "Informatika",
  },
  {
    position: [5.1, 2.8, 0],
    size: [4.1, 2.8, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A103 Biológia",
    category: "Biológia",
  },
  {
    position: [-5.8, -2.7, 0],
    size: [3.4, 3.8, 0.22],
    color: "rgb(183, 215, 168)",
    label: "A104 Biológia",
    category: "Biológia",
  },
  {
    position: [-2.1, -2.7, 0],
    size: [3.3, 3.8, 0.22],
    color: "rgb(241, 223, 158)",
    label: "A105 Informatika",
    category: "Informatika",
  },
  {
    position: [2.4, -2.7, 0],
    size: [3.6, 3.8, 0.22],
    color: "rgb(159, 197, 232)",
    label: "A106 Informatika",
    category: "Informatika",
  },
  {
    position: [6.3, -2.7, 0],
    size: [2.6, 3.8, 0.22],
    color: "rgb(162, 196, 201)",
    label: "A107 Biológia",
    category: "Biológia",
  },
];

const bFloorRooms: RoomDefinition[] = [
  {
    position: [0, 0, -0.2],
    size: [18, 12, 0.12],
    color: "rgb(248, 250, 252)",
    opacity: 0.2,
    label: "B emelet - Alap",
  },
  {
    position: [-6.0, 2.7, 0],
    size: [3.2, 2.7, 0.22],
    color: "rgb(182, 215, 168)",
    label: "B201 Biológia",
    category: "Biológia",
  },
  {
    position: [-2.1, 2.7, 0],
    size: [4.1, 2.7, 0.22],
    color: "rgb(207, 226, 243)",
    label: "B202 Informatika",
    category: "Informatika",
  },
  {
    position: [2.4, 2.7, 0],
    size: [4.5, 2.7, 0.22],
    color: "rgb(180, 231, 215)",
    label: "B203 Biológia",
    category: "Biológia",
  },
  {
    position: [6.3, 2.7, 0],
    size: [2.8, 2.7, 0.22],
    color: "rgb(255, 229, 153)",
    label: "B204 Biológia",
    category: "Biológia",
  },
  {
    position: [-5.3, -2.8, 0],
    size: [4.6, 4, 0.22],
    color: "rgb(159, 197, 232)",
    label: "B205 Informatika",
    category: "Informatika",
  },
  {
    position: [-0.2, -2.8, 0],
    size: [5.4, 4, 0.22],
    color: "rgb(201, 218, 248)",
    label: "B206 Informatika",
    category: "Informatika",
  },
  {
    position: [5.4, -2.8, 0],
    size: [4.3, 4, 0.22],
    color: "rgb(182, 215, 168)",
    label: "B207 Biológia",
    category: "Biológia",
  },
];

const floorGroups: FloorGroupDefinition[] = [
  { position: [0, 1, 3], scale: 0.5, rooms: aFloorRooms },
  { position: [0, 1, 0], scale: 0.5, rooms: aFloorRooms },
  { position: [0, 0, -3], scale: 0.5, rooms: bFloorRooms },
];

function RoomGroups({
  getOpacity,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: RoomGroupProps) {
  return (
    <group position={[0, 0, 0]} rotation={[-1.2, 0, 0.2]}>
      {floorGroups.map((floor, floorIndex) => (
        <group key={floorIndex} position={floor.position} scale={floor.scale}>
          {floor.rooms.map((room) => {
            const opacity = room.category
              ? getOpacity(room.label, room.category, room.opacity ?? 1)
              : (room.opacity ?? 1);

            return (
              <Room
                key={`${room.label}-${room.position.join("-")}`}
                position={room.position}
                size={room.size}
                color={room.color}
                opacity={opacity}
                label={room.label}
                onHoverStart={onHoverStart}
                onHoverMove={onHoverMove}
                onHoverEnd={onHoverEnd}
              />
            );
          })}
        </group>
      ))}
    </group>
  );
}

export default RoomGroups;
