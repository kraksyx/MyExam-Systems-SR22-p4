const questions = [
  {
    "question": "157. At or above what minimum speed should flap retraction from 50% to 0% be done after takeoff?",
    "options": ["95kts", "90kts", "85kts", "80kts"],
    "correct": 1
  },
  {
    "question": "158. Is it true that the mixture should be full rich and the boost pump on before landing?",
    "options": ["False", "Only during takeoff", "Only in emergency landings", "True"],
    "correct": 0
  },
  {
    "question": "159. What should you do immediately if you hear a pop sound and notice the door has popped open during takeoff?",
    "options": ["Maintain airplane control and do not attempt to close the door", "Pull CAPS handle", "Grab the door and try to close it", "Adopt the glide approach and land straight"],
    "correct": 0
  },
  {
    "question": "160. Is it true that the horizontal stabilizer is a two-piece unit attached to the empennage?",
    "options": ["Only on certain aircraft models", "True", "False", "Only during maintenance"],
    "correct": 1
  },
  {
    "question": "161. What should be the normal voltage indication during the cabin pre-flight?",
    "options": ["20–22 volts", "29–31 volts", "26–28 volts", "23–25 volts"],
    "correct": 3
  },
  {
    "question": "162. How soon should you receive oil pressure indication on warm days after startup?",
    "options": ["60 seconds", "15 seconds", "90 seconds", "30 seconds"],
    "correct": 3
  },
  {
    "question": "163. How soon should you receive oil pressure indication on cold winter days after startup?",
    "options": ["90 seconds", "60 seconds or more", "30 seconds", "15 seconds"],
    "correct": 1
  },
  {
    "question": "164. What should you do if the brake temperature caption illuminates after heavy braking on landing?",
    "options": ["Set the park brake immediately", "Ignore the warning and taxi to the gate", "Increase brake force to stop faster", "Ease off brake force, don’t set park brake if temp too high, and wait for brakes to cool down"],
    "correct": 3
  },
  {
    "question": "165. What is the maximum RPM drop for each magneto?",
    "options": ["150 RPM", "100 RPM", "200 RPM", "250 RPM"],
    "correct": 0
  },
  {
    "question": "166. What is the maximum RPM differential between the magnetos?",
    "options": ["50 RPM", "100 RPM", "125 RPM", "75 RPM"],
    "correct": 3
  },
  {
    "question": "167. What is the purpose of the diode between the distribution busses?",
    "options": ["It increases voltage to the Main Distribution Bus 1", "It regulates the RPM of the engine", "It allows ALT 2 to feed the Main Distribution Bus 1", "It keeps current flowing in one direction and prevents ALT 2 from feeding the Main Distribution Bus 1"],
    "correct": 3
  },
  {
    "question": "168. Should you use external power to start the airplane if it has a dead battery?",
    "options": ["No, because if you fly and there’s an alternator failure, the battery won’t supply power", "No, because it will damage the engine", "Yes, but only if the battery is partially charged", "Yes, it’s safe to start the airplane"],
    "correct": 0
  },
  {
    "question": "169. What should you do if the tower clears you for takeoff but the stop bar lights are still on?",
    "options": ["Move past the stop bar lights and inform ATC", "Ignore the stop bar lights and continue", "Proceed with takeoff since you have clearance", "Do not move and inform ATC that the stop bar light is on"],
    "correct": 3
  },
  {
    "question": "170. What action should you take if you observe engine RPM fluctuating, surging, and several RED warning captions on the PFD before reaching Vr during takeoff?",
    "options": ["Increase throttle to stabilize the engine", "Abort the takeoff", "Reduce flaps to reduce drag", "Continue the takeoff and troubleshoot in the air"],
    "correct": 1
  },
  {
    "question": "171. What is the minimum CAPS deployment height above ground level (AGL)?",
    "options": ["700ft", "400ft", "500ft", "600ft"],
    "correct": 3
  },
  {
    "question": "172. Which airspeed will allow the airplane to gain height in the least amount of time?",
    "options": ["Minimum control speed", "Cruise climb speed", "Maximum angle of climb", "Maximum rate of climb"],
    "correct": 3
  },
  {
    "question": "173. What should you do if you see a flashing red light from the tower while on final approach?",
    "options": ["Airport is not safe, you must not land", "Contact the tower and request clearance to land", "Continue the approach and land as planned", "Ignore the light and proceed with landing"],
    "correct": 0
  },
  {
    "question": "174. What is the maximum student crosswind limit?",
    "options": ["10kts", "21kts", "15kts", "25kts"],
    "correct": 2
  },
  {
    "question": "175. What is the normal maximum crosswind limit?",
    "options": ["25kts", "15kts", "10kts", "21kts"],
    "correct": 3
  },
  {
    "question": "176. What is the maximum student tailwind limit?",
    "options": ["7kts", "5kts", "10kts", "3kts"],
    "correct": 1
  },
  {
    "question": "177. What is the immediate action if you inadvertently enter a spin?",
    "options": ["Increase airspeed to recover", "Reduce throttle and apply opposite rudder", "CAPS deployment", "Apply full throttle and pull up"],
    "correct": 2
  },
  {
    "question": "178. What is the procedure for handling a propeller overspeed?",
    "options": ["Adjust power level to keep RPM in limits, reduce airspeed to 90 KIAS, and land as soon as practicable", "Increase power and airspeed to stabilize", "Reduce power to idle and continue flying", "Ignore the overspeed and maintain course"],
    "correct": 0
  },
  {
    "question": "179. What type of bench seat do the rear seats employ?",
    "options": ["A single seat with no split", "A one-piece bench seat", "A split bench seat with no backs", "A two-piece bench seat"],
    "correct": 1
  },
  {
    "question": "180. How are the seat backs of the rear seats configured?",
    "options": ["No split", "70/30 split", "60/40 split", "50/50 split"],
    "correct": 2
  },
  {
    "question": "181. What does the “2+1” seating configuration provide?",
    "options": ["A single seat for one passenger", "A center seat/restraint area for a third passenger on the left hand seat", "A center seat/restraint area for a third passenger on the right hand seat", "Two seats with no additional center seat"],
    "correct": 1
  },
  {
    "question": "182. Which seat is wider in the rear seating configuration?",
    "options": ["The center seat", "The left hand seat", "Both seats are the same width", "The right hand seat"],
    "correct": 1
  },
  {
    "question": "183. How do the rear seat backs recline?",
    "options": ["Only the left seat back reclines", "They do not recline", "Independently of each other", "Together as a single unit"],
    "correct": 2
  },
  {
    "question": "184. What can the rear seat backs be folded forward to provide?",
    "options": ["Additional seating space", "A semi-flat surface for cargo", "Access to the front seats", "A storage compartment"],
    "correct": 1
  },
  {
    "question": "185. From where does the cargo extend when the rear seat backs are folded forward?",
    "options": ["From the seat frame", "From the baggage compartment", "From the cabin floor", "From the front seats"],
    "correct": 1
  },
  {
    "question": "186. How is the recline position of the rear seat backs controlled?",
    "options": ["Through a manual adjustment on the seat back", "Through a control in the baggage compartment", "Through a lever on either side of the seat", "Through a button on the dashboard"],
    "correct": 2
  },
  {
    "question": "187. What type of restraint system do the front seats use?",
    "options": ["3-point safety harness", "Lap belt only", "4-point inflatable restraint system", "5-point harness system"],
    "correct": 2
  },
  {
    "question": "188. Where are the forward seat belts attached?",
    "options": ["To the seat frame", "To the seat back", "To the cabin floor", "To the baggage compartment rear bulkhead"],
    "correct": 0
  },
  {
    "question": "189. Where are the shoulder harnesses for the front seats attached?",
    "options": ["To the baggage compartment rear bulkhead", "To the seat frame", "To inertia reels mounted in the seat back", "To fittings on the cabin floor"],
    "correct": 2
  },
  {
    "question": "190. What type of restraint system do the rear seats use?",
    "options": ["3-point safety harness", "5-point harness system", "4-point inflatable restraint system", "Lap belt only"],
    "correct": 0
  },
  {
    "question": "191. What components make up the rear seat restraint system?",
    "options": ["A 4-point inflatable system", "One shoulder harness and a lap belt", "A lap belt only", "Two shoulder harnesses and a lap belt"],
    "correct": 1
  },
  {
    "question": "192. Where are the rear seat belts attached?",
    "options": ["To the baggage compartment rear bulkhead", "To fittings on the cabin floor", "To the seat back", "To the seat frame"],
    "correct": 1
  },
  {
    "question": "193. Where are the shoulder harnesses for the rear seats attached?",
    "options": ["To fittings on the cabin floor", "To the seat frame", "To inertia reels mounted to the baggage compartment rear bulkhead", "To inertia reels mounted in the seat back"],
    "correct": 2
  },
  {
    "question": "194. Who is provided with integrated seat belt and shoulder harness assemblies with inertia reels?",
    "options": ["The pilot and each passenger", "The rear passengers only", "The pilot and front passengers only", "The pilot only"],
    "correct": 0
  },
  {
    "question": "195. Is it true that the Perspective+ integrated avionics system is not authorized higher than 70N or 70S?",
    "options": ["True", "Only below 70S", "False", "Only above 70N"],
    "correct": 0
  },
  {
    "question": "196. Is it true that the parachute container is mounted behind the aft cabin bulkhead?",
    "options": ["Only during maintenance", "Only in certain models", "False", "True"],
    "correct": 3
  },
  {
    "question": "197. What should you do after adjusting your seats during preflight?",
    "options": ["Adjust the rudder pedals", "Tighten the seat belts", "Push down and listen to the “click”", "Check the fuel levels"],
    "correct": 2
  },
  {
    "question": "198. What is the length of the aircraft?",
    "options": ["24ft (7.32m)", "30ft (9.14m)", "26ft (7.92m)", "28ft (8.53m)"],
    "correct": 2
  },
  {
    "question": "199. What is the procedure for checking the stall warning during preflight?",
    "options": ["Switch on the avionics only and check the PFD", "Switch on the engine and apply suction", "Switch on BAT1,2 & avionics then apply suction", "Apply suction without switching on any systems"],
    "correct": 2
  },
  {
    "question": "200. What is the configuration of the electrical system?",
    "options": ["2 Alt, 2 Bat, 28V DC", "2 Alt, 1 Bat, 12V DC", "1 Alt, 2 Bat, 28V DC", "1 Alt, 1 Bat, 24V DC"],
    "correct": 0
  },
  {
    "question": "201. When is the recirculation mode '0' not available?",
    "options": ["When the temperature is on the cold side", "When the cabin doors are open", "During landing", "During takeoff"],
    "correct": 0
  },
  {
    "question": "202. What does the recirculation mode do?",
    "options": ["Circulates air from outside the cabin", "Ventilates the baggage compartment", "Cools the engine compartment", "Air flow inside the cabin"],
    "correct": 3
  },
  {
    "question": "203. When should you not use recirculation mode?",
    "options": ["When in flight", "During taxiing", "When on the ground", "During engine start"],
    "correct": 0
  },
  {
    "question": "204. Where are the seat belt harnesses located?",
    "options": ["Only in the pilot’s seat", "Back seats only", "Front and back seats", "Front seats only"],
    "correct": 2
  },
  {
    "question": "205. Is it true that pitot head failure is displayed when the switch is on with no current?",
    "options": ["Only on the ground", "True", "False", "Only during flight"],
    "correct": 1
  },
  {
    "question": "206. Is it true that the stall warning mechanism works with negative pressure moving?",
    "options": ["False", "True", "Only during takeoff", "Only during landing"],
    "correct": 1
  },
  {
    "question": "207. What is the minimum oil level?",
    "options": ["4 quarts", "10 quarts", "8 quarts", "6 quarts"],
    "correct": 3
  },
  {
    "question": "208. What is the maximum oil level?",
    "options": ["4 quarts", "10 quarts", "8 quarts", "6 quarts"],
    "correct": 2
  },
];

