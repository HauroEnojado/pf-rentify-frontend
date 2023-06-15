/* eslint-disable react/prop-types */
import CartIcon from '../icons/CartIcon'
import HamburgerIcon from '../icons/HamburgerIcon'
import UserICon from '../icons/UserIcon'
import BtnDarkMode from './BtnDarkMode'
import logoImg from '../../assets/image/logo-rentify.png'

const Header = ({ openModal }) => {
	return (
		<header className='h-[60px] flex items-center justify-between fixed top-0 right-0 w-full p-4 bg-body_light dark:bg-body_dark'>
			<div className='w-36 min-w-[130px] md:hidden'>
				<img src={logoImg} alt='rentify logo' className='min-w-[130px]' />
			</div>

			<div className='flex justify-end items-center gap-4 md:gap-6 w-full'>
				<CartIcon className='stroke-dark_purple dark:stroke-light_purple cursor-pointer' />
				<BtnDarkMode />
				<UserICon className='stroke-dark_purple dark:stroke-light_purple cursor-pointer' />
				<button className='md:hidden block' onClick={openModal}>
					<HamburgerIcon className='stroke-dark_purple dark:stroke-light_purple cursor-pointer ' />
				</button>
			</div>
		</header>
	)
}

export default Header
