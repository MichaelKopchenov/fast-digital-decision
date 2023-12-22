import Staff from '../Staff/Staff';
import StaffBox from '../StaffBox/StaffBox';
import { staffText, TEAM_TEXT_ONE } from '../../utils/constants';
import './Team.css';

export default function Team() {
    return (
        <section className='team' id='Team'>
            <div className='team__container'>
                <StaffBox> 
                    <Staff {...staffText[0]} />
                    <ul class="team__container-box-ul">
                        <li class="team__container-box-li">
                            {TEAM_TEXT_ONE}
                        </li>
                    </ul>
                    <Staff {...staffText[1]} />
                </StaffBox>
                <StaffBox>
                    <Staff {...staffText[2]} />
                    <Staff {...staffText[3]} />
                </StaffBox>
            </div>
        </section>
    );
};
