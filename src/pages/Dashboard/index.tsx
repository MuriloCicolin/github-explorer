import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/49662901?s=460&u=e52214f21bdd3fde655087aaff2bdc55649b29d3&v=4"
            alt="Murilo Cicolin"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS and React Native</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/49662901?s=460&u=e52214f21bdd3fde655087aaff2bdc55649b29d3&v=4"
            alt="Murilo Cicolin"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS and React Native</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/49662901?s=460&u=e52214f21bdd3fde655087aaff2bdc55649b29d3&v=4"
            alt="Murilo Cicolin"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS and React Native</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
