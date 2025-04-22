import Code from "./Code";
import Link from "next/link";
import styles from "./HanukkahOfDataPage.module.css";
const HANUKKAH_URL = "https://hanukkah.bluebird.sh/5784";

export default function HannukahOfDataPage() {
  return (
    <main className={styles.root}>
      <header>
        <div>
          <Link href="/blog">Back to Blogs</Link>
          <h1>Hanukkah of Data using Django</h1>
          <p>April-2025</p>
        </div>
      </header>
      <section>
        <header>
          <h2>Introduction</h2>
        </header>
        <main>
          <p>
            <span>Using the Django ORM for solve the </span>
            <a href="https://hanukkah.bluebird.sh/">
              Hanukkah of Data Challenge
            </a>{" "}
            <span>
              turned out to be a great way to practice Django queries.{" "}
            </span>
            <span>You can view my repo on </span>
            <a href="https://github.com/michaellisitsa/hannukah-of-data-django">
              GitHub
            </a>
          </p>
        </main>
      </section>
      <section>
        <header>
          <h2>Setting up Initial Database</h2>
        </header>
        <main>
          <p>
            <span>We want to use the existing Sqlite file in the </span>
            <a href={`${HANUKKAH_URL}/data`}>data</a> <span>folder.</span>
          </p>
          <p>
            The Sqlite file does not contain any constraints or indices. It may
            have been generated from the CSV by an automated tool. We will see
            that to have performant queries, we will need to improve this.
          </p>
          <p>
            <span>
              Django needs to initialise its ORM, where we can use the{" "}
            </span>
            <a href="https://docs.djangoproject.com/en/5.2/howto/legacy-databases/">
              inspectdb
            </a>{" "}
            <span>flag to determine the shape of data</span>
          </p>
          <Code>{`python manage.py inspectdb > models.py`}</Code>
          <p>By default it will have a very raw representation e.g.</p>
          <Code>{`
            class Customer(models.Model):
              customerid = models.IntegerField(blank=True, null=True)
              name = models.TextField(blank=True, null=True)
              address = models.TextField(blank=True, null=True)
              birthdate = models.TextField(blank=True, null=True)
        `}</Code>
          <span>We can do a basic amount of cleanup</span>
          <ol>
            <li>Remove blank / null options where we know data exists</li>
            <li>
              Set <pre style={{ display: "inline" }}>customerid</pre> as the
              primary key to avoid an automatic{" "}
              <pre style={{ display: "inline" }}>id</pre> column (note the
              original DB does not have a PK, but Django requires it)
            </li>
            <li>Use a CharField as we know the length of the fields</li>
          </ol>
          <Code>{`
          class Customer(models.Model):
            customerid = models.IntegerField(primary_key=True)
            name = models.CharField()
            address = models.CharField()
            birthdate = models.CharField()
          `}</Code>
          <p>
            <span>inspectdb creates unmanaged models by default </span>
            <a href="https://docs.djangoproject.com/en/5.2/howto/legacy-databases/">
              docs
            </a>{" "}
            That is, managed = False in the model’s Meta class. This tells
            Django not to manage each table’s creation, modification, and
            deletion. We will want to modify the tables in future, so we remove
            this line.
          </p>
          <p>
            <span>
              Now we need to generate a migration but we don't want to delete
              the existing database. We can use the flag{" "}
            </span>
            <a href="https://docs.djangoproject.com/en/5.2/ref/django-admin/#cmdoption-migrate-fake-initial">
              --fake-initial
            </a>
            <span>
              {" "}
              to skip new table creations. Note now the schema will not exactly
              match.
            </span>
          </p>
          <Code>{`
          python manage.py makemigrations
          python manage.py migrate --fake-initial
        `}</Code>
        </main>
      </section>
    </main>
  );
}
