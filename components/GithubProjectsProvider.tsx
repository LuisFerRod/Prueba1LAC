import React, { useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface Project {
  id: number;
  name: string;
  description: string;
  // Otros campos relevantes de tu proyecto de GitHub
}

interface GithubProjectsProviderProps {
  children: ReactNode;
}

const GithubProjectsContext = React.createContext<Project[]>([]);

export const GithubProjectsProvider: React.FC<GithubProjectsProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>('https://api.github.com/users/LuisFerRod/repos');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <GithubProjectsContext.Provider value={projects}>
      {children}
    </GithubProjectsContext.Provider>
  );
};

export default GithubProjectsContext;



