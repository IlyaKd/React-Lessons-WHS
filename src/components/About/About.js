import React from 'react';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        isError: false,
        errorText: '',
        repoList: [],
        user: []
    }

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'IlyaKd'
        }).then(({ data }) => {
            this.setState({
                repoList: data,
                isLoading: false
            });
        }).catch(() => {
            this.setState({
                isLoading: false,
                isError: true,
                errorText: 'Ошибка, пользователь не найден!'
            });
        });

        octokit.users.getByUsername({
            username: 'IlyaKd'
        }).then(({ data }) => {
            this.setState({
                user: data,
                isLoading: false
            });
        }).catch(() => {
            this.setState({
                isLoading: false,
                isError: true,
                errorText: 'Ошибка, пользователь не найден!'
            });
        });
    }

    render() {
        const { isLoading, repoList, isError, errorText,  user } = this.state;

        return (
            <div className={styles.wrap}>
                { isLoading ? <div className={styles.preloader}></div> :
                    <div className={styles.inner}>
                        { isError ? <div className={styles.error}>{errorText}</div> :
                            <div>
                                <div className={styles.flex}>
                                    <img src={user.avatar_url} className={styles.avatar}></img>
                                    <div>
                                        <p>{user.login}</p>
                                        <p>{user.bio}</p>
                                    </div>
                                </div>
                                <h2 className={styles.title}>Мои репозитории:</h2>
                                {!isLoading && <ol>
                                    {repoList.map(repo => (
                                        <li key={repo.id}>
                                            <a href={repo.html_url} target="_blank" className={styles.link}>{repo.name}</a>
                                        </li>))}
                                </ol>}
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default About;

