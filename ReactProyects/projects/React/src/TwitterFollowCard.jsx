import { useState } from 'react';

export function TwitterFollowCard ({ userName, children, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    function handleClick() {
        setIsFollowing(!isFollowing);
    }
    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw_followCard_button is-following'
        : 'tw_followCard_button';

    return (
        <article className="tw_followCard">
            <header className="tw_followCard_header">
                <img
                    className="tw_followCard_avatar"
                    src={`https://unavatar.io/twitter/${userName}`}
                    alt={"El avatar del gothkids" + userName}
                />
                <div>
                    <strong>{children}</strong>
                    <span className="tw_followCard_infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {buttonText}
                </button>
            </aside>
        </article>
    );
}