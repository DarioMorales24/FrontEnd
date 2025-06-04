export function TwitterFollowCard ({ userName, name, isFollowing}) {
    const imageSrc = `https://unavatar.io/youtube/${userName}`;
    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw_followCard_button is-following'
        : 'tw_followCard_button';
    return (
        <article className="tw_followCard">
            <header className="tw_followCard_header">
                <img
                    className="tw_followCard_avatar"
                    src={imageSrc}
                    alt={"El avatar del gothkids" + userName}
                />
                <div>
                    <strong>{name}</strong>
                    <span className="tw_followCard_infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}>{buttonText}</button>
            </aside>
        </article>
    );
}