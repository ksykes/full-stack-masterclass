# Project Scope Outline

## Description of project:
A web app that provides information about the location of ethical food sources in Canada and their farming practices. 

Eating no meat or animal products at all is the most obvious and easy way to avoid animal cruelty, as well as environmental and human health issues – especially since none of the current labelling programs include specific standards or monitoring for transport or slaughter. But if you’re not ready to cut meat out of your diet entirely, buying your meat directly from a farm whose practices you trust, shopping at farmers markets or visiting the farm yourself can help make your meat consumption ethical while also building your community’s food security and local economy. “The key problem is not the erosion of animal-care values by producers, as much as the values of consumers, expressed through their purchasing habits.” — David Fraser, world-renowned expert in animal-welfare science

[General info](https://www.theglobeandmail.com/life/giving/how-do-i-make-sure-im-eating-ethically-raised-meat/article536430/ )

## MVP (Minimum Viable Product) Goals:
* Database will only include food providers in the GTA. Initially include data from:
    * [SPCA Certified](https://spca.bc.ca/programs-services/certifications-accreditation/spca-certified/meet-spca-certified-farmers/)
    * [Organic Council of Ontario Directory](https://directory.organiccouncil.ca/directory?view=map)
* Submission form for users to submit a food source/corrections (use form validation)
* Home page view will allow users to input location and receive a list of ethical food sources closest to them
* They’ll be able to click on each location on the map to see it’s name and types of food they sell (use react-router)
    * Can click "more info" for each location that will take users to another view that gives detailed information about the location and its farming practices
* Things to consider:
    * One area of complexity: how to handle image upload
    * How to handle removing - create admin view (not publicly shared link) where you perform transactions like deleting links etc. 

## Stretch Goals:
* Database will include food providers across Ontario and eventually Canada
* Information about what various specifications/food labelling programs require:
    *[SPCA Certified](https://spca.bc.ca/programs-services/certifications-accreditation/spca-certified/)
    *[Canadian Certified Organic](https://www.organiccouncil.ca/organics/organic-certification)
    * Information about what the terms "free-run" (uncaged, indoors), "free-range" (uncaged, with some access to outdoors), "grass-fed" and "pasture-raised" really mean (they don't come with any official certification or monitoring)

## Discovery Phase:
- [x] Researched Data - there are a number of databases that focus specifically on organic food: will use these as a starting point + incorporate ethical farms as well
- [] Pseudo Code
- [] Wireframe