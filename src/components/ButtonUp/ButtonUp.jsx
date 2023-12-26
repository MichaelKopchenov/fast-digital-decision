import './ButtonUp.css'

export default function ButtonUp () {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
        document.getElementById("button__up").style.display = "flex";
    } else {
        document.getElementById("button__up").style.display = "none";
    }
    }
    return (
        <a href="#root" id='button__up'>
            <p className='button__up_forvard'>
                ↑
            </p>
            <p className='button__up_text'>
                Вернуться
            </p>
        </a>
    )
}