import * as React from 'react';

export interface AppProps extends React.HTMLAttributes<HTMLDivElement> {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">JavaScript projects</h1>
          <p className="subtitle">With TypeScript, React and XState</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://via.placeholder.com/800x600"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title">Project</p>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item">
                    Save
                  </a>
                  <a href="#" className="card-footer-item">
                    Edit
                  </a>
                  <a href="#" className="card-footer-item">
                    Delete
                  </a>
                </footer>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://via.placeholder.com/800x600"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://via.placeholder.com/800x600"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://via.placeholder.com/800x600"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
