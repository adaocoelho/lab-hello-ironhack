const statement = <p>You will learn how to user
the most popular frontend library and
become a super Ninja developer.</p>

function MyHeader() {
    return (
    <section className="header">

        <div className='header-logos'>
            <img src='images/ironhack-logo.svg' alt='ironhack-logo' />  
            <img src='images/menu-top.svg' alt='ironhack-logo' />
        </div>

        <div className='header-titles'>        
            <h1>Say Hello to my little friend ReactJS</h1>
            {statement}
            <button className= "button-top" type="button">Awesome!</button>
        </div>

    </section>
    );
    }


  export default MyHeader;