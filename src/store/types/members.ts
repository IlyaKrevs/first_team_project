export interface MovieDetailsMembers {
  id: number;
  idFilm: number;
  idMember: number;
  idProfession: number;
  createdAt: string;
  updatedAt: string;
  member: {
    id: number;
    nameRU: string;
    nameEN: string;
    text: string;
    imageName: string;
    createdAt: string;
    updatedAt: string;
  };
  profession: {
    id: number;
    nameRU: string;
    nameEN: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface MovieAllMembers {
  id: number;
  nameRU: string;
  nameEN: string;
  createdAt: string;
  updatedAt: string;
}
