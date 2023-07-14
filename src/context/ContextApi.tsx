import { createContext } from 'react'

export const InitialState = {
  user: {
    nome: 'Ricardo',
    sobrenome: 'Cardoso',
    idade: 33,
    profission: 'Desenvolvedor Web',

    game: {
      nome: 'Dark Souls',
      plataforma: 'PlayStation',
      ano: 2011
    }
  }
}

export interface InitialStateProps {
  user: {
    nome: string;
    sobrenome: string;
    idade: number;
    profission: string;

    game: {
      nome: string;
      plataforma: string;
      ano: number;
    }
  }
}

export const UserContext = createContext<InitialStateProps>(InitialState);

interface ChildrenProps {
  children: React.ReactNode;
}

export function AuthContext({ children }: ChildrenProps) {
  return (
    <UserContext.Provider value={InitialState}>
      {children}
    </UserContext.Provider>
  )
}