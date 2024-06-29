import './MovieSearchForm.scss'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    query: yup.string().required('Movie name is required'),
});

export const MovieSearchForm = ({ setQuery }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        setQuery(data.query)
    };

    return (
        <form className='search-form--form' onSubmit={handleSubmit(onSubmit)}>
            <input
                className='search-form--input'
                type="text"
                {...register('query')}
                placeholder="Search for a movie..."
            />
            {errors.query && <p className='search-form--p'>{errors.query.message}</p>}
            <button className='search-form--button' type="submit">Search</button>
        </form>
    );
};
