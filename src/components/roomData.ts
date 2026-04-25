export type RoomDefinition = {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  label: string;
  category?: string;
  opacity?: number;
};

export type FloorGroupDefinition = {
  position: [number, number, number];
  scale: number;
  rooms: RoomDefinition[];
  floor: number;
};

const BASE_LABEL_SUFFIX = "- Alap";
const CORRIDOR_LABEL_PREFIX = "Folyoso";

export const isBaseRoomLabel = (label: string) =>
  label.includes(BASE_LABEL_SUFFIX);

export const isCorridorLabel = (label: string) =>
  label.startsWith(CORRIDOR_LABEL_PREFIX);

const groundFloorRooms: RoomDefinition[] = [
  {
    position: [0, 0, -0.2],
    size: [20, 20, 0.12],
    color: "rgb(248, 250, 252)",
    opacity: 0.5,
    label: "A ep. foldszint - Alap",
  },
  {
    position: [-5.4, 1.2, -0.01],
    size: [1.0, 10.5, 0.08],
    color: "rgb(201, 209, 224)",
    opacity: 0.28,
    label: "Folyoso - Foldszint gerinc",
  },
  {
    position: [-0.7, 0.2, -0.01],
    size: [8.5, 1.0, 0.08],
    color: "rgb(201, 209, 224)",
    opacity: 0.28,
    label: "Folyoso - Foldszint also szarny",
  },
  {
    position: [-3.1, -4.2, -0.01],
    size: [5.6, 1.0, 0.08],
    color: "rgb(201, 209, 224)",
    opacity: 0.28,
    label: "Folyoso - Foldszint irodak",
  },
  {
    position: [-5.5, 7, 0],
    size: [1, 1.5, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A005 Ferfi WC",
    category: "WC",
  },
  {
    position: [-4, 6.2, 0],
    size: [2.3, 3, 0.22],
    color: "rgb(205, 226, 248)",
    label: "A007 Laboratorium",
    category: "Laboratorium",
  },
  {
    position: [-4, 4.35, 0],
    size: [2.3, 1, 0.22],
    color: "rgb(248, 232, 191)",
    label: "A008 Elokeszito",
    category: "Elokeszito",
  },
  {
    position: [-4, 3, 0],
    size: [2.1, 2, 0.22],
    color: "rgb(205, 226, 248)",
    label: "A009 Laboratorium",
    category: "Laboratorium",
  },
  {
    position: [-4, 1.25, 0],
    size: [2.1, 1.8, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A010 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-4, -1.0, 0],
    size: [2, 2, 0.22],
    color: "rgb(205, 226, 248)",
    label: "A014 Laboratorium",
    category: "Laboratorium",
  },
  {
    position: [-4, -2.85, 0],
    size: [2, 1.9, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A015 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-5.3, -5.3, 0],
    size: [1.5, 1.5, 0.22],
    color: "rgb(234, 209, 220)",
    label: "A016 Tanari szoba",
    category: "Tanari szoba",
  },
  {
    position: [-4.2, -5.3, 0],
    size: [1, 1.5, 0.22],
    color: "rgb(217, 210, 233)",
    label: "A017 Igazgato helyettes",
    category: "Irodak",
  },
  {
    position: [-2, -5.3, 0],
    size: [3.7, 1.5, 0.22],
    color: "rgb(159, 197, 232)",
    label: "A018 Informatika",
    category: "Informatika",
  },
  {
    position: [1.6, -3.8, 0],
    size: [4, 2.2, 0.22],
    color: "rgb(159, 197, 232)",
    label: "A023 Informatika",
    category: "Informatika",
  },
  {
    position: [-6.3, -1.4, 0],
    size: [1, 1, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A024 Noi WC",
    category: "WC",
  },
  {
    position: [-6.3, -0.5, 0],
    size: [1, 1, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A026 Akadalymentes WC",
    category: "WC",
  },
  {
    position: [2.1, -1.0, 0],
    size: [2.2, 1.6, 0.22],
    color: "rgb(244, 204, 204)",
    label: "A034 Tornatermi oltozo",
    category: "Tornaterem",
  },
  {
    position: [4.8, 0.0, 0],
    size: [3.4, 3.6, 0.22],
    color: "rgb(234, 153, 153)",
    label: "A037 Tornaterem",
    category: "Tornaterem",
  },
];

const firstFloorRooms: RoomDefinition[] = [
  {
    position: [0, 0, -0.2],
    size: [20, 20, 0.12],
    color: "rgb(248, 250, 252)",
    opacity: 0.5,
    label: "A ep. 1 emelet - Alap",
  },
  {
    position: [-5.4, 0, -0.01],
    size: [1.0, 13, 0.08],
    color: "rgb(201, 209, 224)",
    opacity: 0.28,
    label: "Folyoso - 1 emelet gerinc",
  },
  {
    position: [-1.6, -5.8, -0.01],
    size: [6.7, 1.0, 0.08],
    color: "rgb(201, 209, 224)",
    opacity: 0.28,
    label: "Folyoso - 1 emelet irodak",
  },
  {
    position: [-5.5, 7, 0],
    size: [1.0, 1.5, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A103 Ferfi WC",
    category: "WC",
  },
  {
    position: [-4, 6.5, 0],
    size: [2.1, 2.5, 0.22],
    color: "rgb(205, 226, 248)",
    label: "A105 Laboratorium",
    category: "Laboratorium",
  },
  {
    position: [-4, 4.6, 0],
    size: [2.1, 1.6, 0.22],
    color: "rgb(205, 226, 248)",
    label: "A106 Laboratorium",
    category: "Laboratorium",
  },
  {
    position: [-4, 3.05, 0],
    size: [2.1, 1.8, 0.22],
    color: "rgb(205, 226, 248)",
    label: "A108 Laboratorium",
    category: "Laboratorium",
  },
  {
    position: [-4, 1.5, 0],
    size: [2.1, 1.6, 0.22],
    color: "rgb(221, 217, 196)",
    label: "A109 Csoport szoba",
    category: "Egyeb",
  },
  {
    position: [-4, 0.3, 0],
    size: [2.1, 1, 0.22],
    color: "rgb(234, 209, 220)",
    label: "A110 Tanari szoba",
    category: "Tanari szoba",
  },
  {
    position: [-4, -2.1, 0],
    size: [2.1, 1, 0.22],
    color: "rgb(234, 209, 220)",
    label: "A116 Tanari szoba",
    category: "Tanari szoba",
  },
  {
    position: [-4, -3.2, 0],
    size: [2.2, 1.5, 0.22],
    color: "rgb(159, 197, 232)",
    label: "A117 Informatika",
    category: "Informatika",
  },
  {
    position: [-4, -4.6, 0],
    size: [2.2, 1.5, 0.22],
    color: "rgb(159, 197, 232)",
    label: "A118 Informatika",
    category: "Informatika",
  },
  {
    position: [-4.5, -7.1, 0],
    size: [3, 2, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A119 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-1.9, -7.1, 0],
    size: [2.5, 2, 0.22],
    color: "rgb(159, 197, 232)",
    label: "A120 Informatika",
    category: "Informatika",
  },
  {
    position: [0.45, -7.1, 0],
    size: [2.5, 2, 0.22],
    color: "rgb(159, 197, 232)",
    label: "A121 Informatika",
    category: "Informatika",
  },
  {
    position: [3, -6.2, 0],
    size: [2.5, 2, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A123 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-6.3, -3.8, 0],
    size: [1.0, 1.0, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A126 Noi WC",
    category: "WC",
  },
  {
    position: [-6.3, -2.9, 0],
    size: [1.0, 1.0, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A127 Tanari WC",
    category: "WC",
  },
  {
    position: [-6.3, -2, 0],
    size: [1.0, 1.0, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A128 Akadalymentes WC",
    category: "WC",
  },
];

const secondFloorRooms: RoomDefinition[] = [
  {
    position: [0, 0, -0.2],
    size: [20, 20, 0.12],
    color: "rgb(248, 250, 252)",
    opacity: 0.5,
    label: "A ep. 2 emelet - Alap",
  },
  {
    position: [-5.4, 0, -0.01],
    size: [1.0, 13, 0.08],
    color: "rgb(201, 209, 224)",
    opacity: 0.28,
    label: "Folyoso - 2 emelet gerinc",
  },
  {
    position: [-1.6, -5.8, -0.01],
    size: [6.7, 1.0, 0.08],
    color: "rgb(201, 209, 224)",
    opacity: 0.28,
    label: "Folyoso - 2 emelet irodak",
  },
  {
    position: [-5.5, 7, 0],
    size: [1.0, 1.5, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A203 Ferfi WC",
    category: "WC",
  },
  {
    position: [-4, 6.5, 0],
    size: [2.1, 2.3, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A205 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-4, 4.6, 0],
    size: [2.1, 1.8, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A206 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-4, 3.3, 0],
    size: [2.1, 1, 0.22],
    color: "rgb(248, 232, 191)",
    label: "A207 Elokeszito",
    category: "Elokeszito",
  },
  {
    position: [-4, 2, 0],
    size: [2.1, 1.8, 0.22],
    color: "rgb(162, 196, 201)",
    label: "A208 Fizika eloado",
    category: "Egyeb",
  },
  {
    position: [-4, 0.7, 0],
    size: [2.1, 1.0, 0.22],
    color: "rgb(234, 209, 220)",
    label: "A209 Tanari szoba",
    category: "Tanari szoba",
  },
  {
    position: [-4, -0.6, 0],
    size: [2.1, 1.8, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A210 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-4, -3.2, 0],
    size: [2.2, 1.5, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A215 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-4, -4.6, 0],
    size: [2.2, 1.5, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A216 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-4.5, -7.1, 0],
    size: [3.0, 2.0, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A217 Tanterem",
    category: "Tanterem",
  },
  {
    position: [-1.9, -7.1, 0],
    size: [2.5, 2.0, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A218 Tanterem",
    category: "Tanterem",
  },
  {
    position: [0.45, -7.1, 0],
    size: [2.5, 2.0, 0.22],
    color: "rgb(234, 209, 220)",
    label: "A219 Tanari szoba",
    category: "Tanari szoba",
  },
  {
    position: [3.0, -8.0, 0],
    size: [2.5, 1.4, 0.22],
    color: "rgb(184, 227, 180)",
    label: "A220 Tanterem",
    category: "Tanterem",
  },
  {
    position: [3.0, -6.2, 0],
    size: [2.5, 2.0, 0.22],
    color: "rgb(159, 197, 232)",
    label: "A222 Informatika",
    category: "Informatika",
  },
  {
    position: [-6.3, -4.8, 0],
    size: [1.0, 1.0, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A224 Noi WC",
    category: "WC",
  },
  {
    position: [-6.3, -3.9, 0],
    size: [1.0, 1.0, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A225 Tanari WC",
    category: "WC",
  },
  {
    position: [-6.3, -3, 0],
    size: [1.0, 1.0, 0.22],
    color: "rgb(220, 230, 241)",
    label: "A226 Akadalymentes WC",
    category: "WC",
  },
  {
    position: [-6.4, -2.0, 0],
    size: [1.3, 1.0, 0.22],
    color: "rgb(234, 209, 220)",
    label: "A213 Tanari szoba",
    category: "Tanari szoba",
  },
];

export const floorGroups: FloorGroupDefinition[] = [
  { position: [0, 0, -3], scale: 0.42, rooms: groundFloorRooms, floor: 1 },
  {
    position: [0, 1, 0],
    scale: 0.42,
    rooms: firstFloorRooms,
    floor: 2,
  },
  {
    position: [0, 1, 3],
    scale: 0.42,
    rooms: secondFloorRooms,
    floor: 3,
  },
];
