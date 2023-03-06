const KeyFindings = (props) => {
    const {keyFindings} = props
    return (
        <div className="KeyFindingsBox">
            <h2> Key Findings: </h2>
            {/* <h2> Significant worsening of disease, now very extensive and patchy sparing only apices. </h2> */}
            <p> {keyFindings} </p> {/* I left your placeholder text above for styling becuase currently there are no key findings in the database*/}
        </div>
    );
}

export default KeyFindings