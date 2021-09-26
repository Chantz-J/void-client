// FLEX RULES
export const flexRow = (jcRule, aiRule) => {
    // Mixins done JS style :p
    // These arguments will need to be strings when the funciton is invoked
    // These should be interpolated when used in styled-components
    return `display: flex; 
            justify-content: ${jcRule}; 
            align-items: ${aiRule};`;
};

export const flexColumn = (jcRule, aiRule) => {
    return `display: flex; 
            flex-direction: column;
            justify-content: ${jcRule}; 
            align-items: ${aiRule};`;
};

// GRADIENTS
export const blueGradient = () => {
    return `background: linear-gradient(45deg, #5581F1, #1153FC)`;
};

export const greenGradient = () => {
    return `background: linear-gradient(45deg, #00F7A7, #04F5ED)`;
};