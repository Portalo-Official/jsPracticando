
/**
 * 
 * @param {*} elementId 
 */
export const App = (elementId) => {

    //Cuando la funcion app se llama
    (() => {
        
        const app = document.createElement('div');
        app.innerHTML = '<h1>Todo App</h1>';
        document.querySelector(elementId).append(app);

    })();

}