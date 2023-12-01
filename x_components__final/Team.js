import React,{Component} from 'react'
import TeamMember from './TeamMember'
import memberInfo from './memberInfo'

function team(){
 return(
<div className='row'>
    <TeamMember
    info = {{
        img: '/images/01.jpg',
        name: 'Walter White',
        position:'',
        phone: '',
        email: '',
        website: '',
    }}
/>
</div>

 );     
}
class Team extends Component{
    constructor(){
        super()
        this.state = { memberInfo : memberInfo }
    }

    clickEvent(){
        console.log(memberInfo[1])
    }


    mapping(x){
            const members = x.map( member =>
                <TeamMember
                    key={member.id}
                    img={member.img}
                    name={member.name}
                    position={member.position}
                    phone={member.phone}
                    email={member.email}
                    website={member.website}
                />);
            return members
    }


    render(){
        return(
            <div className="row">
                 <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>click me!</button>
                {this.mapping(this.state.memberInfo)}
                </div>
        )
    }
}
export default Team;