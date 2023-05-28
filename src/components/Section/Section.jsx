export const Section = ({ title, type: Type = 'div', children }) =>{   
    return (
        <section>
            <Type>{title}</Type>
            <div>
                {children}
            </div>
        </section>
        );
    
}