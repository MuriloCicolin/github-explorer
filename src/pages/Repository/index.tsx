import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Header, RepositoryInfo, Issues, PageButton } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState(1);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });
    api
      .get(`repos/${params.repository}/issues`, {
        params: {
          page,
          per_page: 5,
        }
      })
      .then((response) => {
        setIssues(response.data);
      });
  }, [params.repository]);


  useEffect(() => {
    async function loadIssues() {
      const response = await api.get(`repos/${params.repository}/issues`, {
      params: {
        page,
        per_page: 5,
      }
      });
      setIssues(response.data);
    }
    loadIssues();

  },[page])

  async function handlePage(action:any) {
    if(action === 'Anterior') {
     await setPage(page - 1)
    } else {
     await setPage(page + 1)
    }

  }



  return (
    <>
      <Header>
        <img src={logoImg} alt="Logo github" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.full_name} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
          {issues.map((issue) => (
            <a key={issue.id} href={issue.html_url} target="_blank">
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
         <PageButton>
           <button  disabled={page < 2} onClick={() => handlePage('Anterior')} >Anterior</button>
            <p>{page}</p>
           <button onClick={() => handlePage('Proximo')} >Próximo</button>
         </PageButton>

      </Issues>
    </>
  );
};

export default Repository;
