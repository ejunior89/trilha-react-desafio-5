import Link from 'next/link';

const Custom404 = () => {
    return (
        <div>
            <h1>Post not found</h1>
            <p>The requested post was not found.</p>
            <Link href="/">Go back to the homepage</Link>
        </div>
    );
};

export default Custom404;
