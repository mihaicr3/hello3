function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dropLogin() {
    var loginForm = document.getElementById("loginForm");


    var topValue = parseFloat(loginForm.style.top);
    console.log(topValue)

    if (isNaN(topValue) || topValue < 0) {
        for (let i = -50; i <= 50; i++) {
            await wait(5);
            loginForm.style.top = i + "%";
        }
    } else {
        for (let i = 50; i > -50; i -= 1) {
            await wait(5);
            loginForm.style.top = i + "%";
        }
    }
    
}



document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    document.addEventListener('click', async function(event) {
        var topValue = parseFloat(loginForm.style.top);
        var targetElement = event.target; // Element that was clicked

        // Check if the click occurred outside the loginForm div
        if (!loginForm.contains(targetElement)) {
            // Apply your JS function here
            if (!(isNaN(topValue) || topValue < 0)) {
            // Otherwise, move the form up
            for (let i = 50; i > -50; i -= 1) {
                await wait(5);
                loginForm.style.top = i + "%";
            }
            } 
        }
    });
});


