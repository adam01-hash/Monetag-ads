const ShowAdButton = () => {
    const showAd = () => {
        show_8678694().then(() => {
            alert('You have seen an ad!');
        }).catch(error => {
            console.error("Ad Error:", error);
        });
    }

    return (
        <button onClick={showAd}>Show ad</button>
    );
}

// Export the component for use in a React project
export default ShowAdButton;

const ShowAdButton = () => { React.useEffect(() => { if (window.show_8678694) { return } const tag = document.createElement('script') tag.src = '//doodiwom.com/vignette.min.js' tag.dataset.zone = '8678694' tag.dataset.sdk = 'show_8678694' document.body.appendChild(tag) }, []) const showAd = () => { show_8678694().then(() => { alert('You have seen an ad!') }) } return <button onClick={showAd}>Show ad</button> }
