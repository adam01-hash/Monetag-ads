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
