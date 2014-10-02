/*
  To use:
  1. Create a page called "Loading"
  2. On the object layer create a textbox
*/
on("ready", function(obj) {
    
	var displaySpeed = 10000;
	var numChars = 35;
    var tips = [
		"When the DM asks you 'Really? Are you sure?', you say 'NO.'",
		"Use perception checks often. Or get stabbed in the back. Up to you.",
		"Slower travel is safer travel. Moving faster leaves you more open to random encounters.",
		"Never split the party.",
		"Nature checks can help you identify an unknown monster - and its weaknesses.",
		"Use your social skills often; violence isn’t always the answer! Just usually.",
		"Be sure to learn the lore, your DM probably worked very hard on it.",
		"Roleplaying your character might net you Inspiration points – which are very useful.",
		"All the coins are multiples of 10 of each other. Except for Electrum, which no one uses anyway.",
		"To use a spell, you must expend a slot of its level or higher. Cantrips are free.",
		"If the campaign is getting too serious for you,why not start truble at the tavern.",
		"Vulnerability means double damage. Resistance means half damage.",
		"On a 1 you fumble an attack, you automatically miss, and maybe even hurt yourself.",
		"On a 20 you crit an attack, roll twice for damage before adding your modifiers.",
		"This is a tabletop game, not Skyrim. For the love of God, think outside the box.",
		"Whenever you divide a number in the game, round down!",
		"If circumstances cause a roll to have both advantage and disadvantage, you are considered to have neither of them.",
		"If multiple circumstances impose disadvantage and only one grants advantage you still have neither advantage nor disadvantage.",
		"If a skill contest results in a tie, the situation remains the same as it was before the contest.",
		"Two or more characters team up to attempt a task. In this case one character rolls a check with advantage. (See Help Action)",
		"To make a group ability check, everyone in the group makes the ability check. If at least half the group succeeds, the whole group succeeds.",
		"Medium creature carrying capacity is your Strength score multiplied by 15.",
		"Medium creature Push/Drag/Lift Capacity is your Strength score multiplied by 30.",
		"If you carry weight in excess of 5 times your Strength score, you are encumbered. (speed -10ft)",
		"If you carry weight in excess of 10 times your Strength score, you are heavily encumbered. (speed -20ft, disadvantage on checks/attaacks)",
		"You add your Strength modifier to your attack roll and your damage roll when attacking with a melee weapon",
		"You add your Dexterity modifier to your attack roll and your damage roll when attacking with a ranged weapon",
		"If your Constitution modifier changes, your hit point maximum changes as well, as though you had the new modifier from 1st level.",
		"While climbing or swimming, each foot of movement costs 1 extra foot (2 extra feet in difficult terrain)",
		"When you make a long jump, you cover a number of feet up to your Strength score if you move at least 10 feet on foot immediately before the jump.",
		"When you make a standing long jump, you cover a number of feet up to 1/2 your Strength score.",
		"When you make a high jump, you leap into the air a number of feet equal to 3 + your Strength modifier if you move at least 10 feet before the jump.",
		"When you make a standing high jump, you leap into the air a number of feet equal to 1/2(3 + your Strength modifier).",
		"A creature can hold its breath for a number of minutes equal to 1 + its Constitution modifier (minimum of 30 seconds).",
		"In a lightly obscured area, creatures have disadvantage on Perception checks that rely on sight.",
		"In a heavily obscured area, creatures effectively suffer from the blinded condition.",
		"A creature with blindsight can perceive its surroundings without relying on sight,",
		"A creature with truesight can, sees in normal and magical darkness, see invisible objects, automatically detect visual illusions and succeed on saving throws against them, and perceive the original form of a creature that is transformed by magic.",
		"A character can spend one or more Hit Dice at the end of a short rest",
		"short rest is a period of downtime, at least 1 hour long, during which a character does nothing more strenuous than eating, drinking, reading, and tending to wounds.",
		"At the end of a long rest, a character regains all lost hit points. The character also regains spent Hit Dice, up 1/2 of the character’s total.",
		"You can use downtime between adventures to recover from a debilitating injury, disease, or poison.",
		"The time between adventures is a great chance to perform research, gaining insight into mysteries that have unfurled over the course of the campaign.",
		"For every day of downtime you spend crafting, you can craft items at 5 gp/day, and you must expend raw materials worth half the total market value.",
		"You can spend time between adventures learning a new language or training with a set of tools.",
		"You can break up your movement on your turn, using some of your speed before and after your action.",
		"Every foot of movement in difficult terrain costs 1 extra foot.",
		"Whenever you switch movement methods, subtract the distance you’ve already moved from the new speed.",
		"Standing up from prone takes an amount of movement equal to half your speed.",
		"Every foot of movement while crawling costs 1 extra foot.",
		"While squeezing through a space, a creature must spend 1 extra foot for every foot it moves there",
		"Creature can squeeze through a space that is large enough for a creature one size smaller than it.",
		"When you take the Dash action, you gain extra movement for the current turn. The increase equals your speed, after applying any modifiers.",
		"If you take the Disengage action, your movement doesn’t provoke opportunity attacks for the rest of the turn.",
		"When you take the Dodge action, until the start of your next turn, any attacks against you has disadvantage, make Dexterity saving throws with advantage.",
		"When you attack a target that you can’t see, you have disadvantage on the attack roll.",
		"When a creature can’t see you, you have advantage on attack rolls against it.",
		"You add your proficiency bonus to your attack roll when you attack using a weapon withwhich you have proficiency",
		"Ranged attacks have disadvantage on the attack rolls if you are within 5 feet of a hostile creature who can see you",
		"Your attack roll has disadvantage when your target is beyond normal range.",
		"A target with half cover has a +2 bonus to AC and Dexterity saving throws.",
		"A target with three-quarters cover has a +5 bonus to AC and Dexterity saving throws.",
		"A target with total cover can’t be targeted directly by an attack or a spell.",
		"A target of your grapple must be no more than one size larger than you.",
		"You can drag or carry the grappled creature but your speed is halved, (unless it is two or more sizes smaller than you).",
		"To escape a grapple use action and succeed on a Strength (Athletics) or Dexterity (Acrobatics) check vs Strength (Athletics) check.",
		"To grapple do a Strength (Athletics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check",
		"You can make a special melee attack to shove a creature, either to knock it prone or push it 5ft away from you",
		"The target of your shove must be no more than one size larger than you.",
		"To shove, make a Strength (Athletics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics)",
		"During an Attack action with a light one-handed melee weapon, you can use a bonus action to attack with a different light melee weapon.",
		"When using two weapons, don’t add your ability modifier to the damage of the bonus attack, unless that modifier is negative.",
		"Multiple instances of resistance or vulnerability that affect the same damage type count as only one instance",
		"You die if after an attack the remaining damage >= your hit point maximum",
		"When you make a death saving throw and roll a 1, it counts as two failures",
		"When you make a death saving throw and roll a 20, you recover 1hp",
		"You can stabalize a creature on a successful DC 10 Wisdom (Medicine) check.",
		"You can deal non lethal damage at the instant the damage is dealt.",
		"Mounting costs movement equal to half your speed.",
		"If an effect moves your mount against its will while you’re on it, you must succeed on a DC 10 Dexterity saving throw or fall off the mount, landing prone",
		"If your mount is knocked prone, you can use your reaction to dismount it as it falls and land on your feet.",
		"If the mount provokes an opportunity attack while you’re on it, the attacker can target you or the mount.",
		"Underwater, a creature that doesn’t have a swimming speed has disadvantage on the attack roll unless the weapon is a dagger, javelin, shortsword, spear, or trident.",
		"Underwater, a ranged weapon attack automatically misses a target beyond the weapon’s normal range.",
		"Underwater, ranged weapon attack roll have disadvantage unless the weapon is a crossbow, a net, or a weapon that is thrown like a javelin",
		"If a spell requires a verbal component, the caster must be able to speak.",
		"If a spell requires a somatic component, the caster must have free use of at least one hand to perform these gestures.",
		"You lose concentration on a spell if you cast another spell that requires concentration.",
		"When you take damage while concentrating, you must make a Constitution saving throw (DC 10 or half damage you take, whichever is higher).",
		"Certain environmental phenomena, require a DC 10 Constitution saving throw to maintain concentration on a spell",
		"The DC to resist one of your spells equals 8 + your spellcasting ability modifier + your proficiency bonus + any special modifiers.",
		"Your attack bonus with a spell attack equals your spellcasting ability modifier + your proficiency bonus.",
		"The effects of the same spell cast multiple times don’t combine.",
		"A blinded fails checks that requires sight. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage.",
		"A charmed creature can’t attack the charmer. The charmer has advantage on any ability check to interact socially with the creature.",
		"A deafened creature can’t hear and automatically fails any ability check that requires hearing.",
		"A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. It can’t willingly move closer to the source of its fear.",
		"Attack rolls against an invisible creature have disadvantage, and the creature’s attack rolls have advantage",
		"A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.",
		"A poisoned creature has disadvantage on attack rolls and ability checks",
		"A prone creature has disadvantage on attack rolls.",
		"An attack roll against a prone creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage."
    ];

	



	 setInterval(function() {
	 
		var currentPage = getObj("page", Campaign().get("playerpageid"));
		var pageName = currentPage.get("name");
		
		if(pageName != "Loading") return;
		
		var text = findObjs({
			_type: "text",
			_pageid: currentPage.get("_id"),
			layer: "objects"
		})[0];
	
     	var pickone = Math.floor(Math.random()*tips.length);

		var countChars = 0;
		var formatedText = "";
		for (i = 0; i < tips[pickone].length; i++) { 
			formatedText += tips[pickone].charAt(i);
			
			if(tips[pickone].charAt(i) == " " && countChars > numChars){
				formatedText += "\n";
				countChars = 0;
			}
			countChars++;
		}
		
		text.set("text", formatedText);
		log( "new tip: "+ text.get("text"));
	}, displaySpeed); //take an action every 5 seconds
   
});