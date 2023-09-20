import QuestionBot from "@/components/QuestionBot1";
import Head from "next/head";
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Chat application</title>
            </Head>
        </div>
    )
};
