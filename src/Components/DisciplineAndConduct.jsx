import React from 'react';
import { motion } from 'framer-motion';
function DisciplineAndConduct() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={"px-4 py-6 bg-gray-100 rounded-lg flex flex-col"}
    >
      <h2 className={"text-xl font-bold mb-4"}>Discipline & Conduct</h2>
      <p className="mt-4 text-gray-700">
        PDEA's College of Engineering Manjari is committed to maintaining a high
        standard of discipline and conduct among its students. The following rules
        and regulations are expected to be followed by all students:
      </p>
      <motion.ol
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={"list-decimal pl-4 mt-4 text-gray-700"}>
        <li>
        It is imperative that the student attends classes from the day of opening to the last day of each term during the academic year.
        </li>
        <li>
        Student must be regular in attendance for theory and practical classes. In case the attendance falls short of 75% for each, theory and practicals, term will not be granted.
        </li>
        <li>
        The student should complete all the term work such as Journals, Drawing Sheets, Workshop or any other assignment as per schedule.
        </li>
        <li>
        Students must maintain punctuality while attending all the theory and practical classes.
        </li>
        <li>
        Students must put-on college I-Card every day without fail and attend the college in full college uniform on the specified days.
        </li>
        <li>
        Strict disciplinary action will be taken against those students who fail to attend the tests, practicals, tutorials or theory classes.
        </li>
        <li>
        Student and parents should specially note that if the student fails to complete the term work regularly and to the entire satisfaction of the Head of the Department, his/her term will not be granted and will not be allowed to appear for the University examination.
        </li>
        <li>
        The student should note that he / she is responsible to the authorities of the Institute not only for his / her conduct in the premises of the Institute but also for his / her general behavior outside.
        </li>
        <li>
        Any reported or observed objectionable conduct within or outside the premises of the Institute, will make him / her liable for strict disciplinary action.
        </li>
        <li>
        Student should not participate in any political and antisocial activities.
        </li>
        <li>
        Student should help in maintaining the buildings and the campus of the Institute clean and tidy.
        </li>
        {/* Add additional rules and regulations here */}
      </motion.ol>
    </motion.div>
  );
}

export default DisciplineAndConduct;
