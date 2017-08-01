class ClientUtility {


	
	static getInput(input){
		if(input.numberOfTeams && input.teamsPerMatch){
			return {numberOfTeams : input.numberOfTeams.value , teamsPerMatch : input.teamsPerMatch.value};
		}else{
			//show Error;
			return null;
		}
	}
	static getValidMatch(teamsPerMatch) {
	    teamsPerMatch = Math.floor(teamsPerMatch || undefined);

	    if (isNaN(teamsPerMatch)) {
	      return null;
	    }

	    if (teamsPerMatch <= 1) {
	      return null;
	    }

	    return teamsPerMatch;
  	}

	static getValidTeam(numberOfTeams) {
	    numberOfTeams = Math.floor(numberOfTeams || undefined);

	    if (isNaN(numberOfTeams)) {
	      return null;
	    }
	    return numberOfTeams;
	}
}