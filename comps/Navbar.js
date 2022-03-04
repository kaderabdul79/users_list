import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <span><h2>Next</h2></span>
            <Link href=""><a>Producst</a></Link>
            <Link href=""><a>User</a></Link>
            <Link href=""><a>About</a></Link>
        </div>
    );
};

export default Navbar;