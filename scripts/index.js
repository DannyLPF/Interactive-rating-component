let ratingValue = '';
let ratingSelected = false;


const ratingButtons = document.querySelectorAll('.js-rating-button');


ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => {
            if (btn !== button) btn.classList.remove('active');
        });
    
        button.classList.toggle('active');
        ratingSelected = true;
        
        ratingValue = button.value;
        console.log(ratingValue);
    });
});

const submitButton = document.querySelector('.js-submit-button');

submitButton.addEventListener('click', () => {
    if(ratingSelected) loadRatingSentContent();
});

function loadRatingSentContent()
{
    document.body.innerHTML = `
        <div class="container" style="--max-width: 25.5rem; " style="justify-content: center; align-items: center;">
            <section id="ratings-pannel">
                <div class="flex">
                    <div lass="flow" style="--flow-space: 1.5rem; flex-basis: 100%; text-align: center;">
                        <div class="flex" style="margin-bottom: 1em; justify-content: center;">
                            <img src="images/illustration-thank-you.svg" alt="thank-you.icon">    
                        </div>
                        <div class="flex" style="margin-bottom: 1em; justify-content: center;">
                            <p class="text-orange bg-dark-blue" style="width: 60%; padding: .5em 0; border-radius: 1em;">You selected ${ratingValue} out of 5</p>
                        </div>
                        <div>
                            <h1 style="margin-bottom: .5em;">Thank you!</h1>
                            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}