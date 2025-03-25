/* eslint-disable react/prop-types */
import "../../styles/Contributors.css";

export function Contributors({ contributors }) {
  return (
    <ul className='contribuitors'>
      {contributors.map(({ avatar, login, url }) => (
        <li key={login}>
          <a className='contribuitors-a' href={url} title={`Github of ${login}`} target="_blank" rel="noopener noreferrer">
            <div>
              <img src={avatar} width={64} height={64} alt={`Avatar of ${login}`} />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
